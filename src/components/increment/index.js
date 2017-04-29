import Increment from './increment';
import { connect } from 'react-redux';

mapStateToProps() {
   
};

mapDispatchToProps() {

};


const IncrementPage = connect(mapStateToProps, mapDispatchToProps)(Increment);
export default IncrementPage;
