import { Grid, Card, Text } from "@nextui-org/react";

export default function Home() {
  const MockItem = ({ text }) => {
    return (
      <Card css={{ $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white">
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Grid.Container gap={1} justify="space-evenly" alignContent="stretch" alignItems="stretch" css={{ backgroundColor: "$green700" }}> {/** className="grid_container" */}
      <Grid.Container xs={3} gap={1} css={{ backgroundColor: "$yellow500" }}>
        <Grid xs={12}>
          <MockItem text="Columna 1" />
        </Grid>
        <Grid xs={12}>
          <MockItem text="Columna 1" />
        </Grid>
        <Grid xs={12}>
          <MockItem text="Columna 1" />
        </Grid>
      </Grid.Container>
      <Grid.Container xs={6} gap={1} css={{ backgroundColor: "$black" }}>
        <Grid xs={12} css={{ backgroundColor: "$black" }}>
          <MockItem text="Columna 2" />
        </Grid>
        <Grid xs={12}>
          <MockItem text="Columna 2" />
        </Grid>
        <Grid xs={12}>
          <MockItem text="Columna 2" />
        </Grid>
      </Grid.Container>
      <Grid.Container xs={3} gap={1} css={{ backgroundColor: "$yellow500" }}>
        <Grid xs={12}>
          <MockItem text="Columna 3" />
        </Grid>
        <Grid xs={12}>
          <MockItem text="Columna 3" />
        </Grid>
        <Grid xs={12}>
          <MockItem text="Columna 3" />
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
}
