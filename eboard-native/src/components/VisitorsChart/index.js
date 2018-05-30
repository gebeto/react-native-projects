import { connect } from 'reac-redux';
import VisitorsChart from './VisitorsChart';


export default connect(
	state => ({
		data: null,
	}),
	dispatch => ({
		loadData() {
			// /my/dashboard/visitor_statistics_{shopId}
		}
	}),
)(VisitorsChart);
