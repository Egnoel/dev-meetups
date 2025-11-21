const EventAgenda = ({ AgendaItems }: { AgendaItems: string[] }) => {
  return (
    <div className="agenda">
      <h2>Agenda</h2>
      <ul className="list-disc list-inside">
        {AgendaItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventAgenda;
