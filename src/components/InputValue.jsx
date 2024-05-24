export default function InputValue({value, type, onValueChange}) {

const typeNames = {
    G: 'GrundWert',
    p: 'Prozentsatz'
};

const NumberInput = () => {
  const [value, setValue] = useState('');

 

const handleChange = (e) => {
  onValueChange(e.target.value);
};

  return (
    <div>
    <h3>  {typeNames[type]}  </h3>
    <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Enter numbers and dots only"
    />
    
    </div>
  )
  }