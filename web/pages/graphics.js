import React from "react";
import {
  Box,
  Container,
  Heading,
  Grid,
} from "theme-ui";

export default function Graphics() {
  let particles = [
    {
      label: "50",
      color: "orange",
      number: "0",
    },
    {
      label: "100",
      color: "purple",
      number: "1",
    },
    {
      label: "150",
      color: "yellow",
      number: "2",
    },
  ];
  let gravity = [
    {
      label: "1",
      color: "blue",
      number: "0",
    },
    {
      label: "2",
      color: "red",
      number: "1",
    },
    {
      label: "3",
      color: "cyan",
      number: "2",
    },
    {
      label: "4",
      color: "yellow",
      number: "3",
    },
    {
      label: "5",
      color: "purple",
      number: "4",
    },
    {
      label: "6",
      color: "orange",
      number: "5",
    },
    {
      label: "7",
      color: "blue",
      number: "6",
    },
    {
      label: "8",
      color: "green",
      number: "7",
    },
    {
      label: "9",
      color: "red",
      number: "8",
    },
    {
      label: "10",
      color: "cyan",
      number: "9", // Skip Kahoot
    },
    {
      label: "11",
      color: "green",
      number: "10", // Skip Kahoot
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        minHeight: "100vh",
      }}
    >
      <Container py={"8px"}>
        <Grid columns={[3, 4]} >
          <Box
            sx={{
              bg: "muted",
              textAlign: "center",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heading as="h1" sx={{ fontSize: ["1.4em", "2.5em"] }}>
              Amount of Particles:
            </Heading>
          </Box>
          {particles.map((x) => (
            <Box
              key={x.number}
              sx={{
                bg: x.color,
                textAlign: "center",
                borderRadius: "18px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: "pointer",
                transition:
                  "transform .125s ease-in-out, box-shadow .125s ease-in-out",
                ":focus,:hover": {
                  boxShadow: "elevated",
                  transform: "scale(1.0625)",
                },
              }}
              p={4}
              onClick={() => {
                fetch(`/api/graphics?particles=${x.number}`);
              }}
            >
              <Heading as="h1" sx={{ fontSize: ["4em", "5em"] }}>
                {x.label}
              </Heading>
            </Box>
          ))}
          <Box
            sx={{
              bg: "muted",
              textAlign: "center",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heading as="h1" sx={{ fontSize: ["1.4em", "2.5em"] }}>
              Gravitational Strength:
            </Heading>
          </Box>
          {gravity.map((x) => (
            <Box
              sx={{
                bg: x.color,
                textAlign: "center",
                borderRadius: "18px",
                cursor: "pointer",
                transition:
                  "transform .125s ease-in-out, box-shadow .125s ease-in-out",
                ":focus,:hover": {
                  boxShadow: "elevated",
                  transform: "scale(1.0625)",
                },
              }}
              p={4}
              onClick={async () => {
                let res = await fetch(`/api/graphics?gravity=${x.number}`).then((r) => r.json());
                console.log(res)
                if(res.error){
                  alert(`Sorry! ${res.error}. Please try again in a bit, I do this to ensure no ears are hurt` )
                }
              }}
            >
              <Heading as="h1" sx={{ fontSize: ["4em", "5em"] }}>
                {x.label}
              </Heading>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
