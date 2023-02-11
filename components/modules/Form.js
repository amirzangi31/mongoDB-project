import FormInput from "./FormInput";
import ItemList from "./ItemList";

function Form({ form, setForm }) {



  const changeHandler = e => {
      setForm({
        ...form ,
        [e.target.name] : e.target.value
      })
  }

  return (
    <div>
      <FormInput
        type="text"
        name="name"
        label="Name"
        value={form.name}
        onChange={changeHandler}
      />
      <FormInput
        type="text"
        name="lastName"
        label="LastName"
        value={form.lastName}
        onChange={changeHandler}
      />
      <FormInput
        type="text"
        name="email"
        label="Email"
        value={form.email}
        onChange={changeHandler}
      />
      <FormInput
        type="text"
        name="phone"
        label="Phone"
        value={form.phone}
        onChange={changeHandler}
      />
      <FormInput
        type="text"
        name="postalcode"
        label="Postalcode"
        value={form.postalcode}
        onChange={changeHandler}
      />
      <FormInput
        type="date"
        name="date"
        label="Date"
        value={form.date}
        onChange={changeHandler}
      />

      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
