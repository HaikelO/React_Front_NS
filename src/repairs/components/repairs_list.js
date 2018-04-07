import React, { Component } from 'react';
import RepairsListItem from './repairs_list_item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepairs } from './../actions/index';

class RepairsList extends Component {
    componentDidMount() {
        this.props.fetchRepairs();
    }
    renderItemList(item) {
        return <RepairsListItem key={item._id} id={item._id} title={item.title} client={item.client} etat={item.etat} />
    }
    render() {
        var { repairs } = this.props;
        console.log("Repairs:", repairs);
        if (repairs === []) {
            return <div>Loading</div>
        }
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="text-center">Title</th>
                            <th className="text-center">Client</th>
                            <th className="text-center">Etat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repairs.map(this.renderItemList)}
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        repairs: state.repairs
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchRepairs }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RepairsList);