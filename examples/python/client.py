import asyncio

from gql import gql, Client
from gql.transport.aiohttp import AIOHTTPTransport


async def main() -> None:
    transport: AIOHTTPTransport = AIOHTTPTransport(url="https://graphql.senpy.club")

    async with Client(transport=transport, fetch_schema_from_transport=True) as client:
        query = gql(
          """
          query {
            random: random {
              image
            }
          }
          """
        )

        print((await client.execute(query))["random"]["image"])

asyncio.run(main())
