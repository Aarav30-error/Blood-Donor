import { useEffect, useState } from "react"
import BloodFilter from "./BloodFilter"
import DonorList from "./DonorList"
import DonorStats from "./DonorStats"

export default function BloodDonorApp() {
  const [donors, setDonors] = useState([])
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("all")
  const [requestedIds, setRequestedIds] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDonors() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        )

        if (!response.ok) {
          throw new Error("Failed to fetch donors")
        }

        const data = await response.json()

        const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]

        const transformed = data.map(user => ({
          id: user.id,
          name: user.name,
          city: user.address.city,
          bloodGroup:
            bloodGroups[Math.floor(Math.random() * bloodGroups.length)],
          available: Math.random() > 0.3
        }))

        setDonors(transformed)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDonors()
  }, [])

  if (loading) return <p>Loading donors...</p>
  if (error) return <p>Error: {error}</p>

  const filteredDonors = donors.filter(donor => {
  if (selectedBloodGroup === "all") return true
  return donor.bloodGroup === selectedBloodGroup
})

function handleRequest(id) {
  setRequestedIds(prev => [...prev, id])
}

const availableCount = donors.filter(d => d.available).length

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Community Blood Donor Finder</h1>
        <p className="app-subtitle">Connecting heroes to those in need</p>
      </header>

      <div className="controls-section">
        <BloodFilter
          selectedBloodGroup={selectedBloodGroup}
          setSelectedBloodGroup={setSelectedBloodGroup}
        />
        <DonorStats availableCount={availableCount} />
      </div>

      <main className="main-content">
        <DonorList
          donors={filteredDonors}
          requestedIds={requestedIds}
          handleRequest={handleRequest}
        />
      </main>
    </div>
  )
}