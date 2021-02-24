import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Leaderboard extends Component {
  render() {
    const { users, userIds } = this.props;
    const sortedIds = userIds.map(id => {
        let count = users[id].questions.length + Object.keys(users[id].answers).length
        return {
            id,
            count, 
        }
    }).sort((a, b) => b.count - a.count);
    return (
      <div className='leaderboard '>
        <h1 className='leaderboard-title'>Who's leading the race?</h1>
        <table className="leaderboard-table">
          <tbody>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Questions</th>
              <th>Answers</th>
            </tr>
            {sortedIds.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="user-circle">
                    <img
                      className="user-avatar"
                      src={users[item.id].avatarURL}
                      alt="avatar"
                    />
                  </div>
                </td>
                <td>
                  <div className="user-name">{users[item.id].name}</div>
                </td>
                <td>
                  <div className="count">{users[item.id].questions.length}</div>
                </td>
                <td>
                  <div className="count">
                    {Object.keys(users[item.id].answers).length}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    userIds: Object.keys(users),
  };
}

export default withRouter(connect(mapStateToProps)(Leaderboard));
