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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    loadReminders();  
  }, [])

  const loadReminders = async () => {
    setIsLoading(true);
    const reminders = await ReminderServices.getReminders();
    setReminders(reminders);
    setIsLoading(false);
  }

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const addReminder = async (title: string) => {
    const newReminder = await ReminderServices.addReminders(title);
    setReminders([newReminder, ...reminders]);
  }

  return (
    <>
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={(removeReminder)} />   
      {isLoading && <div className="spinner-border"></div>}
    </div>
    </>
  )
}

export default App


//add error handling
//style it
