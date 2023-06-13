// import React from "react";
// class Contact extends React.Component {
//     render() {
//         return (
//             <>
//                 <h1>This is class Component</h1>
//             </>
//         );
//     }
// }
// export default Contact;
// here we imported whole react so we have to write react.component

// but now we will only import component class from react 

// here render is inbuilt method so we will compulsory use it 

import { Component } from "react";
class Contact extends Component {
    render() {
        return (
            <>
                <h1>This is class component</h1>
            </>
        )
    }
}
export default Contact;