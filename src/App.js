function App() {
  const [form, setForm] = React.useState({
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    telephone: ''
  });
  const [message, setMessage] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setMessage('Enregistrement effectué !');
        setForm({ nom: '', prenom: '', adresse: '', email: '', telephone: '' });
      } else {
        setMessage("Erreur d'enregistrement");
      }
    } catch (err) {
      setMessage("Erreur réseau");
    }
  };

  return (
    <div>
      <h1>Formulaire PostgreSQL</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom:</label>
          <input name="nom" value={form.nom} onChange={handleChange} />
        </div>
        <div>
          <label>Prénom:</label>
          <input name="prenom" value={form.prenom} onChange={handleChange} />
        </div>
        <div>
          <label>Adresse:</label>
          <input name="adresse" value={form.adresse} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <label>Téléphone:</label>
          <input name="telephone" value={form.telephone} onChange={handleChange} />
        </div>
        <button type="submit">Envoyer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
