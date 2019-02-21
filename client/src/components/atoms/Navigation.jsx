import React from 'react'
import { Container, Button, ButtonGroup } from 'reactstrap'
import { getSoundCount } from '../../modules/axios_functions'

export default class Navigation extends React.Component {
    state= {
        page: []
    }

    componentDidMount = () => 
        getSoundCount().then((response)=>{
            let page = []
            for(let i = 0; i < Math.ceil(response.data)/26; i++)
                page.push({disable: false})
            this.setState({page: page})
        }).catch((error)=>console.log(error))

    getButton = (i) => {
        if(i === 0 || i === this.state.page.length - 1 || (i >= this.props.page-1 && i <= this.props.page +1))
            return(
                <Button 
                    color="dark" 
                    key={i} 
                    disabled={this.props.page === i} 
                    onClick={()=>this.props.setPage(i)}
                    >
                    {i+1}
                </Button>
            )
        if(i===1 || i === this.state.page.length - 2)
            return(<Button color="dark" disabled>...</Button>)
        
        return("")
    }

    render = () => {
        if(this.state.page.length > 1)
            return(
                <Container className="d-flex my-2">
                    <ButtonGroup className="mx-auto" size="lg">
                        {this.state.page.map((p, index)=>this.getButton(index))}
                    </ButtonGroup>
                </Container>
            )
        return("")
    }
    
}