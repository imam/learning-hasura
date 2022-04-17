import { gql, useQuery } from "@apollo/client";
import { Card, Grid, Page, Text } from "@geist-ui/react";
import { Subscription_Root } from "./generated/graphql";

export function App() {
  const { data, loading } = useQuery<Subscription_Root>(gql`
    query MyQuery {
      _helloworld_article {
        id
        rating
        title
      }
    }
  `);
  return (
    <Page>
      <Grid.Container gap={2} justify="center" height="100px">
        {loading
          ? "Loading..."
          : data?._helloworld_article.map((article) => (
              <Grid xs={6} key={article.id}>
                <Card shadow width="100%">
                  <Text>{article.title}</Text>
                  <Text>{article.rating}</Text>
                </Card>
              </Grid>
            ))}
      </Grid.Container>
    </Page>
  );
}
