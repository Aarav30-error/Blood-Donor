export default function DonorCard({
  donor,
  requestedIds,
  handleRequest
}) {
  return (
    <div className="donor-card">
      <div className="card-header">
        <span className="donor-name">{donor.name}</span>
        <span className="blood-badge">{donor.bloodGroup}</span>
      </div>
      <div className="card-body">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        {donor.city}
      </div>
      <div className="card-footer">
        {requestedIds.includes(donor.id) ? (
          <span className="status-badge status-sent">
            Request Sent ✅
          </span>
        ) : donor.available ? (
          <button onClick={() => handleRequest(donor.id)}>
            Request Help
          </button>
        ) : (
          <span className="status-badge status-unavailable">
            Not Available
          </span>
        )}
      </div>
    </div>
  )
}