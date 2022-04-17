import { gql, useQuery } from "@apollo/client";
import { Card, Grid, Page, Text } from "@geist-ui/react";

type Article = {
  __typename: string;
  id: number;
  title: string;
  rating: number;
};

export function App() {
  const { data, loading } = useQuery<{ _helloworld_article: Article[] }>(gql`
    query MyQuery {
      _helloworld_article {
        id
        rating
        title
      }
    }
  `);
  console.log(data);
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
