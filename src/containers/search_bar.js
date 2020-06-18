  import React, {Component} from "react"
  import { connect } from "react-redux"
  import {bindActionCreators} from "redux"
  import  "../style/searchbar.css"
  import {fetchWeather} from "../actions/index"

  class SearchBar extends Component{
    constructor(props){
      super(props)
      this.state = {term: ''}
      this.onInputChange= this.onInputChange.bind(this)
      this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange(event){

      this.setState({term: event.target.value})
    }
    onFormSubmit(event){
      event.preventDefault()
      this.props.fetchWeather(this.state.term)
      this.setState({term: '' })
    }
    render(){
      return(
      <section className="contact py-3">
      <div className="container ">
        <div className="row ">
          <div className="co-sm-4 mx-auto col-md-6 my-3 d-flex align-items-center">
              <form 
              onSubmit={this.onFormSubmit}
              className=" form-group  form-inline">
                <input 
                value={this.state.term}
                onChange={this.onInputChange}
                className="form-control input-lg text-capitalize my-2"
                placeholder="your city name"
                />
                <button type="submit" className="btn contact-btn mx-2 my-2 text-capitalize">search
                </button>
              </form>
            </div>
        </div>
        </div>
      </section>
      )
    }
  }
  function mapStateToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
  }
export default connect(null,mapStateToProps)(SearchBar)