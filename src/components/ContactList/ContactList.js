import contactsAction from '../redux/contactsRedux/contactsAction';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import fade from '../../transitionsCSS/fade.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import getFilterContacts from './getFilterContacts';


class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      }),
    ).isRequired,
    onClickDelete: PropTypes.func.isRequired,
  };
  render() {
    const { contacts, onClickDelete } = this.props;
    return (
      <TransitionGroup component="ul" className={style.list}>
        {contacts &&
          contacts.map(contact => (
            <CSSTransition key={contact.id} timeout={250} classNames={fade}>
              <li key={contact.id} className={style.item}>
                <p className={style.contact}>
                  <span>{contact.name}:</span>
                  <span>{contact.number}</span>
                </p>
                <button type="button" onClick={() => onClickDelete(contact.id)}>
                  Delete
                </button>
              </li>
            </CSSTransition>
          ))}
      </TransitionGroup>
    );
  }
}

const mapStateToProps = ({ contacts: { items, filter } }) => {
  /** фильтруем, показываем только те что совпадают*/
  console.log(filter);
  return {
    contacts: getFilterContacts(items, filter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickDelete: id => dispatch(contactsAction.deleteContact(id)),
    clearFilter: e => dispatch(contactsAction.changeFilter(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);