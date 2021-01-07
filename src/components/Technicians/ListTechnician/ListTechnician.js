import TechItem from '../TechItem/TechItem';
import style from './ListTechnician.module.css'
import PropTypes from 'prop-types';

const ListTechnicians = (props) => {

  const items = props.technicians.map((tech) => (
    <TechItem
      key={tech._id}
      tech={tech}
      deleteTechnician={props.deleteTechnician}
      updateTechnician={props.updateTechnician}
    />
  ));

  return(
    <div>
      <ul className={style.ulStyle}>
        <li className={style.liStyleHeader}>Id</li>
        <li className={style.liStyleHeader}>Full Name</li>
        <li className={style.liStyleHeader}>Email</li>
        <li className={style.liStyleHeader}>Phone</li>
        <li className={style.liStyleHeader}>Status</li>
        <li className={style.liStyleHeader}>Trained In</li>
        <li className={style.liStyleHeader}>Assigned Clients</li>
        <li className={style.liStyleHeader}>Spare Hours Available</li>
        <li className={style.liStyleHeader}>Actions</li>
      </ul>
      {items}
    </div>
  );
}

ListTechnicians.propTypes = {
  technicians: PropTypes.array.isRequired,
  deleteTechnician: PropTypes.func.isRequired,
  updateTechnician: PropTypes.func.isRequired,
}

export default ListTechnicians;