import React from "react";

const Book = ({title, author, pages}) =>{
    return (
        <div>
            <p>Title : {title}</p>
            <p>Author : {author}</p>
            <p>Pages : {pages}</p>
        </div>
    )
};

class Library extends React.Component{
    state = {
        isOpen: true,
        isLoading: false,
        data: []
    };

    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log("Component mounted");
        this.setState({
            isLoading: true
        });

        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                    data
                });
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Component updated");
    }

    componentWillUnmount() {
        console.log("Component unmounted");
    }

    changeState = () => {
        this.setState( prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    render() {
        const { books } = this.props;
        return (
            <div>
                <h1>The library is {this.state.isOpen ? 'Open' : 'Close'}</h1>

                <button onClick={this.changeState}>change</button>

                {books.map((book, i) =>
                    <Book key={i} title={book.title} author={book.author} pages={book.pages} />
                )}

                {this.state.isLoading ? 'Loading ....'
                    :
                    <div>
                        {this.state.data.map((product, i) => {
                            return (
                                <div key={i}>
                                    <p>{product.name}</p>
                                    <img src={product.image} height={100}/>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
};

export default Library;