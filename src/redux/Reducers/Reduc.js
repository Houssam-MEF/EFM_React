import React from 'react'

const INITIAL_STATE = {
    books: [
        {id:1, titre:"React", categorie:"Front"},
        {id:2, titre:"Laravel", categorie:"Back"},
        {id:3, titre:"Java", categorie:"Desktop"}
    ]

}

export default function Reduc(state=INITIAL_STATE, action){
    if (action.type==="ADD"){
        let newBook = {};
        let arrayBooks = [...state.contacts];
        newBook.id = arrayBooks.length+1;
        newBook.titre = action.payload[0];
        newBook.categorie = action.payload[1];
        arrayBooks.push(newBook);

        return {books: arrayBooks};
    }
    
    if (action.type==="DEL"){
        let arrayBooks = state.books.filter((t)=>{
            return t.id !== action.payload;
        })

        return {books: arrayBooks};
    }

    return state;
}