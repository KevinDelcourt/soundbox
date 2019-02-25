import React from 'react'
import { Container, Button, ButtonGroup } from 'reactstrap'
import { getSoundCount } from '../../modules/axios_functions'
import Context from '../../context'

export default class Navigation extends React.Component {
    static contextType = Context

    state= {
        lastMount:"",
        page: []
    }

    setPage = (value) => this.context.setSb({page: value},this.context.reload)

    componentDidMount = () => 
        getSoundCount(this.context.sb.search).then((response)=>{
            let page = []
            for(let i = 0; i < Math.ceil(response.data)/26; i++)
                page.push({disable: false})
            this.setState({page: page, lastMount: this.context.sb.search})
        }).catch((error)=>console.log(error))
    
    componentDidUpdate = () => {
        if(this.context.sb.search !== this.state.lastMount)
            this.componentDidMount()
    }

    getButton = (i) => {
        if(i === 0 || i === this.state.page.length - 1 || (i >= this.context.sb.page-1 && i <= this.context.sb.page +1))
            return(
                <Button 
                    color="dark" 
                    key={i} 
                    disabled={this.context.sb.page === i} 
                    onClick={()=>this.setPage(i)}
                    >
                    {i+1}
                </Button>
            )
        if(i===1 || i === this.context.sb.page.length - 2)
            return(<Button color="dark" disabled>...</Button>)
        
        return("")
    }

    render = () => {
        if(this.state.page.length > 1 &&(this.context.sb.idPlaylist === -1 || this.context.sb.editPlaylist))
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