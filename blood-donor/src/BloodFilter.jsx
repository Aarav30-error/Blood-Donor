export default function BloodFilter({ selectedBloodGroup, setSelectedBloodGroup }) {
  return (
    <div className="filter-container">
      <label className="filter-label">Filter by Group:</label>
      <select
        className="blood-select"
        value={selectedBloodGroup}
        onChange={e => setSelectedBloodGroup(e.target.value)}
      >
        <option value="all">All Blood Groups</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>
    </div>
  )
}