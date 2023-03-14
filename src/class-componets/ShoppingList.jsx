import React from "react"
class ShoppingList extends React.Component {
    render(){
        return (
            <div className="shopping-list">
                <h1>Shoping List for {this.props.name}</h1>
                <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>oculus</li>
                </ul>
            </div>
        )
    }
}
export default ShoppingList