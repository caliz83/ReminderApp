import { useEffect, useState } from 'react'
import './App.css'
import ReminderList from './Components/ReminderList'
import Reminder from './Models/Reminders'
import ReminderServices from './Services/Reminder'
import NewReminder from './Components/NewReminder'

// const reminders: Reminder[] = [
//   {id: 1, title: 'Reminder1'}
// ]
//this got copied into the end of the useState statement, delete the rest

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() => {
    loadReminders();  
  }, [])

  const loadReminders = async () => {
    const reminders = await ReminderServices.getReminders();
    setReminders(reminders)
  }

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const addReminder = async (title: string) => {
    const newReminder = await ReminderServices.addReminders(title);
    setReminders([newReminder, ...reminders]);
  }

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={(removeReminder)} />   
    </div>
  )
}

export default App


//add a loading indicator
//add error handling
//style it
