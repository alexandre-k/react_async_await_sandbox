import React, { Component } from 'react'
import { FormGroup, FormControl, InputGroup, Glyphicon, ButtonGroup, Button } from 'react-bootstrap'
import Gallery from './Gallery'


export default class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }

    async search () {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        const getBooks = await fetch(`${BASE_URL}${this.state.query}`, { method: 'GET' })
        const books = await getBooks.json();
        const { items } = books
        console.log(items);
        this.setState({ items })
    }

    render() {
        return (
            <div className="Global">
                <h2>Book Explorer</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text'
                            placeholder='Search for a book'
                            onChange={ event => this.setState({query: event.target.value}) }
                            onKeyPress={ event => {
                                if (event.key == 'Enter') {
                                    this.search();
                                }
                            } }
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <ButtonGroup>
                                <Glyphicon glyph="search"/>
                        </ButtonGroup>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Gallery items={this.state.items}/>
            </div>
        )
    }
}

