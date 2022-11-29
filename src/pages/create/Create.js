import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useCollection } from '../../hooks/useCollection';

// styles
import './Create.css';

const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' }, 
];

const Create = () => {
  const { documents } = useCollection('users');
  const [users, setUsers] = useState([]);
  // form field values
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (documents) {
      const options = documents.map(user => {
        return { value: user, label: user.displayName }
      });
      setUsers(options);
    }
  }, [documents])

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);

    if (!name) {
      setFormError('Please provide a project name.');
      return;
    }
    if (!details) {
      setFormError('Please provide project details.');
      return;
    }
    if (!dueDate) {
      setFormError('Please set a due date.');
      return;
    }
    if (!category) {
      setFormError('Please select a project category.');
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError('Please assign the project to at least 1 user.');
      return;
    }
    console.log(name, details, dueDate, category.value, assignedUsers);
  }
  return (
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            type="text" 
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project details:</span>
          <textarea
            type="text" 
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        <label>
          <span>Set due date:</span>
          <input
            type="date" 
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Project category:</span>
          <Select 
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Assign to:</span>
          <Select 
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>

        <button className='btn'>Add Project</button>

        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  )
}

export default Create



