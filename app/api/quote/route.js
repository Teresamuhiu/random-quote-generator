export async function GET(request) {
    try {
      const response = await fetch("https://zenquotes.io/api/random");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching quote:", error.message);
      return new Response(
        JSON.stringify({ error: "Failed to fetch quote" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
  