import { Component } from "react"
import fetchData from "api"
import { StyledImageGallery } from "./ImageGallery.styled"

const ERROR_MESSAGE = "Не вийшло взяти дані, спробуйте ще раз"

export default class ImageGallery extends Component {
    state = {
        value:'',
        images:[],
        isLoading: false,
        error: null,
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevState.images)
        const fetchSearch = () => {
            try {
                const fetchedSearch = fetchData();
                fetchedSearch.then(response=> {
                    this.setState(prevState=>(
                        console.log(prevState)
                        // {
                            
                            // images: [...prevState, response.hits]
                        // }
                        ))
                    console.log(prevState.images)
                })
            } catch(error) {
                console.log(error)
            } 
        }
        fetchSearch()
    }
   
    render() {
        this.componentDidUpdate()
        return (
            <StyledImageGallery class="gallery">

            </StyledImageGallery>
        )
    }
}