import React, {Fragment, useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {HashRouter, Switch, Route, Link, useParams, useHistory} from "react-router-dom";
import {ThemeProvider} from "styled-components";

import {codeList} from "./countries.js";

import {darkTheme,
        lightTheme,
        GlobalStyle,
        Header,
        Find,
        SearchBox,
        FilterBox,
        Results,
        Back,
        Details,
        Loading,
        Failed} from "./styles.js";

const regions=["Africa", "Americas", "Asia", "Europe", "Oceania", "All", "Filter by Region"];

const Info=({state, dispatch})=>{

    const [data, setData]=useState({loading: "true"});

    let {code}=useParams();
    let history=useHistory();

    useEffect(()=>{
        setData({loading: "true"});
        fetch(`https://restcountries.com/v2/alpha/${code}`)
            .then(res=>res.json())
            .then(
                (result)=>{
                    setData(result);
                },
                (error)=>{
                    setData(error);
                }
            );
    },[code]);

    return(
        <Fragment>
        <Back onClick={history.goBack}>
            <i className="fa fa-arrow-left" />
            Back
        </Back>
        {data.loading
            ?<Loading><i className="fa fa-circle-notch"/ >Loading</Loading>
            :data.message
                ?<Failed>Country not found!</Failed>
                :<Details>
                    <img style={{width: '200px'}} src={data.flag} />
                    <div id="text">
                        <h2>{data.name}</h2>
                        <div id="description">
                            <p><strong>Native Name: </strong>{data.nativeName}</p>
                            <p><strong>Population: </strong>{data.population}</p>
                            <p><strong>Region: </strong>{data.region}</p>
                            <p><strong>Sub Region: </strong>{data.subregion}</p>
                            <p><strong>Capital: </strong>{data.capital}</p>
                            <p><strong>Top Level Domain: </strong>{data.topLevelDomain.join(', ')}</p>
                            <p><strong>Currencies: </strong>
                                {data.currencies
                                    ?data.currencies.map(x=>{return x.name}).join(', ')
                                    :"None"}
                            </p>
                            <p><strong>Languages: </strong>
                                {data.languages
                                    ?data.languages.map(x=>{return x.name}).join(', ')
                                    :"None"}
                            </p>
                        </div>
                        <p id="border"><strong>Border Countries: </strong>
                            {data.borders
                                ?data.borders.map((x,i)=>{
                                    return(
                                        <Link to={"/"+x.toUpperCase()}>
                                            <button>
                                                {codeList[x.toUpperCase()]}
                                            </button>
                                        </Link>
                                    )
                                })
                                :"None"
                            }
                        </p>
                    </div>
                </Details>
        }
        </Fragment>
    )
}

const List=({list})=>{
    return(list.length==0
        ?<div id="no-results">No Countries Found!</div>
        :<Results>
            {list.map(x=>{
                return(
                    <Link to={"/"+x.alpha3Code}>
                    <div className="card">
                        <div>
                            <img style={{width: '200px'}} src={x.flag} />
                        </div>
                        <h4>{x.name}</h4>
                        <p><strong>Population: </strong>{x.population}</p>
                        <p><strong>Region: </strong>{x.region}</p>
                        <p><strong>Capital: </strong>{x.capital}</p>
                    </div>
                    </Link>
                )
            })}
        </Results>
    )
}

const Search=({state, dispatch})=>{

    let apiCall=(x)=>{
        dispatch({type: "LIST", payload: {searching: "true"}});
        fetch(`https://restcountries.com/v2/${x}?fields=name,flag,population,region,capital,alpha3Code`)
            .then(res=>res.json())
            .then(
                (result)=>{
                    dispatch({type: "LIST", payload: result});
                },
                (error)=>{
                    dispatch({type: "LIST", payload: error});
                }
            )
    }

    useEffect(()=>{
        apiCall(state.input==""?"all":`name/${state.input}`);
    },[]);

    return(
        <Fragment>
            <Find>
                <SearchBox>
                    <i className="fa fa-search" />
                    <input id="search" placeholder="Search for a Country..."
                        value={state.input}
                        onChange={e=>dispatch({type: "INPUT", payload: e.target.value})}
                        onKeyDown={e=>{
                            if(e.keyCode==13){
                                apiCall(`name/${state.input}`);
                            }
                        }}
                    />
                </SearchBox>
                <FilterBox>
                    <button id="select-main">
                        {regions[state.region]}
                    </button>
                    <div id="drop">
                        {regions.map((x,i)=>{return(i>5?""
                            :<button className="option"
                                onClick={()=>{
                                            dispatch({type: "REGION", payload: i});
                                            setDrop(0);
                                        }}>
                                {x}
                            </button>
                        )})}
                    </div>
                </FilterBox>
            </Find>
            {state.list.searching
                ?<Loading><i className="fa fa-circle-notch"/ >Loading</Loading>
                :state.list.message
                    ?<Failed>No Countries Found!</Failed>
                    :<List list={state.region>4?state.list:state.list.filter(x=>{return x.region==regions[state.region]})} />
            }
        </Fragment>
    );
}

const App=()=>{

    const state=useSelector(state=>state);
    const dispatch = useDispatch();

    return(
        <ThemeProvider theme={state.dark?darkTheme:lightTheme}>
            <GlobalStyle />
            <Header>
                <h1>Where in the World?</h1>
                <button onClick={()=>dispatch({type: "DARK"})}>
                    {state.dark==0
                        ?<Fragment>
                            <i className="fa fa-moon" /> Dark
                            </Fragment>
                        :<Fragment>
                            <i className="fa fa-sun" /> Light
                            </Fragment>
                    } Mode
                </button>
            </Header>
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <Search state={state} dispatch={dispatch} />
                    </Route>
                    <Route path="/:code">
                        <Info state={state} dispatch={dispatch} />
                    </Route>
                </Switch>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App;
