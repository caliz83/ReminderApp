import { useState } from "react";
import Reminder from "../Models/Reminders";



interface ReminderListProps {
  items: Reminder[]; //interface Reminder to set this one up; moved to Reminders.ts
  onRemoveReminder: (id: number) => void
}

//instead of ..... = (props: ReminderListProps)
const ReminderList = ({ items, onRemoveReminder }: ReminderListProps) => {


  return (
    <ul className="list-group">
        {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <button className="btn btn-outline-danger rounded-pill mx-5" onClick={()=> onRemoveReminder(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
