import React from 'react'




class AddFriend extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newFriend: ''
        }

        this.updateNewFriend = this.updateNewFriend.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)

    }

    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        })
    }

    handleAddNew() {
        this.props.addNew(this.state.newFriend);
        this.setState ({
            newFriend: ''
        })
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.newFriend} onChange={this.updateNewFriend}></input>
                {/* <input type='button' value='add' onChange={this.handleAddNew}></input> */}
                <button onClick={this.handleAddNew}> Add Friend </button>
            </div>
        )
    }
}

class ShowList extends React.Component {

    render() {
        return (
            <div>
                <h3> Friends :</h3>
                <ul>
                    {
                        this.props.names.map((friend, index) => {
                            return <li key={index}> {friend} </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

class FriendsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'cuichao',
            friends: [
                'afei',
                'dehua',
                'xc'
            ]
        }

        this.addFriend = this.addFriend.bind(this)


    }

    addFriend(friend) {
        this.setState((state) => ({
            friends: state.friends.concat([friend])
        }))
    }

    render() {
        return (
            <div>
                <h3>name : {this.state.name}</h3>
                <AddFriend addNew={this.addFriend} />
                <ShowList names={this.state.friends}></ShowList>
            </div>
        )
    }
}
export default FriendsContainer
