import React from "react";
import {
  Box,
  Container,
  Heading,
  Grid,
  Link,
  Badge,
  Button,
  Text,
} from "theme-ui";

export default function Music() {
  let moods = [
    {
      emoji: "🎃",
      color: "orange",
      number: "0",
    },
    {
      emoji: "⚡️",
      color: "purple",
      number: "1",
    },
    {
      emoji: "😎",
      color: "yellow",
      number: "2",
    },
  ];
  let sfx = [
    {
      emoji: "⏮",
      color: "blue",
      number: "0",
    },
    {
      emoji: "🥁",
      color: "red",
      number: "1",
    },
    {
      emoji: "🤖",
      color: "cyan",
      number: "2",
    },
    {
      emoji: "💥",
      color: "yellow",
      number: "3",
    },
    {
      emoji: "🤞",
      color: "purple",
      number: "4",
    },
    {
      emoji: "🔔",
      color: "orange",
      number: "5",
    },
    {
      emoji: "🦅",
      color: "blue",
      number: "6",
    },
    {
      emoji: "💸",
      color: "green",
      number: "7",
    },
    {
      emoji: "🎶",
      color: "red",
      number: "8",
    },
    {
      emoji: "🎸",
      color: "cyan",
      number: "10", // Skip Kahoot
    },
    {
      emoji: "💨",
      color: "green",
      number: "11", // Skip Kahoot
    },
  ];
    let particles = [
    {
      label: "50",
      color: "orange",
      number: "50",
    },
    {
      label: "200",
      color: "purple",
      number: "200",
    },
    {
      label: "400",
      color: "yellow",
      number: "400",
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
      color: "cyan",
      number: "2",
    },
    {
      label: "3",
      color: "purple",
      number: "4",
    },
    {
      label: "4",
      color: "blue",
      number: "6",
    },
    {
      label: "5",
      color: "red",
      number: "8",
    },
    {
      label: "6",
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
      <Container py={"24px"}>
        <Grid columns={[1, 2]}>
          <Box
            sx={{
              display: "flex",
              alignContent: "flex-end",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              justifyItems: "flex-start",
            }}
          >
            <Heading as="h1" sx={{ marginBlockEnd: "0em", lineHeight: "1" }}>
              🎸 Change The Display!
            </Heading>
          </Box>
        </Grid>

        <Grid columns={[3, 4]} mt={3}>
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
            <Heading as="h1" sx={{ fontSize: ["1.4em", "3em"] }}>
              Music:
            </Heading>
          </Box>
          {moods.map((x) => (
            <Box
              key={x.number}
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
              pt={4}
              pb={3}
              onClick={() => {
                fetch(`/api/music?beat=${x.number}`);
              }}
            >
              <Heading as="h1" sx={{ fontSize: ["4em", "5em"] }}>
                {x.emoji}
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
