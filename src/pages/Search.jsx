import React, { useState } from "react";
import './Search.css'
import SearchIcon from '@mui/icons-material/Search'
import MicIcon from '@mui/icons-material/Mic'
// import Button from '@mui/material/Button';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../components/StateProvider'
import { actionTypes } from '../components/reducer'

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue()

    const [input, setInput] = useState("")
    const history = useNavigate()

    const search = (e) => {
        e.preventDefault()

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        // do something with input... come back and fix
        history('/search')
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>

            {!hideButtons ? (
            <div className="search__buttons">
                <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            ) : (
                <div className="search__buttons">
                <Button className="search__buttonHidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button className="search__buttonHidden" variant="outlined">I'm Feeling Lucky</Button>
            </div>
            )}
        </form>
    )
}

export default Search