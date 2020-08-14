import React from 'react';
import axios from 'axios';


class myComponent extends React.Component {
componentDidMount() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=<Book Name>')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export default myComponent