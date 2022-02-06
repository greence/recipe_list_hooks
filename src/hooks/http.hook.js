import { useState, useCallback } from "react"

export const useHttp = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const requestData = useCallback(
		async (url, method = "GET", body = null, headers = {
			'Content-Type': 'application/json'
		}) => {
			setLoading(true)
			try {
				setError(false)
				const response = await fetch(url)

				if (!response.ok) {
					throw new Error(`Could not get data, status: ${response.status}`)
				}

				const data = await response.json()
				setLoading(false)
				return data
			}

			catch (error) {
				setLoading(false)
				setError(error.message)
				throw error
			}

		}, [])

	const clearError = useCallback(() => { setError(null) }, [])

	return { loading, error, requestData, clearError }
}