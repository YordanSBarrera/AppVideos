import React from 'react'

class SearchBar extends React.Component {
    state = ({ textInp: '' })

    handleChangeTextInput = (event) => {
        this.setState({ textInp: event.target.value })
    }
    onSubmitForm=(event)=> {
        event.preventDefault();
        this.props.llamadaApp(this.state.textInp)
        
    }


    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onSubmitForm}>
                    <div className="field">
                        <label className='label ui'>Buscar Video</label>
                        <input type='text'
                            value={this.state.textInp}
                            onChange={this.handleChangeTextInput}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;