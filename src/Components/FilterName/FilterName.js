import React from 'react';
import style from './FilterName.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsAction from '../redux/contactsRedux/contactsAction';


const FilterName = ({ value, onChange }) => (
  <label className={style.container}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

FilterName.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = ({ contacts: { filter } }) => ({
  value: filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);