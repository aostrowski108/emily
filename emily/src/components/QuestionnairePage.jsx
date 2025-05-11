import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Paper,
  Grid,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";

// Theme colour for quick re-use
const accent = "#7c0a02"; // deep red hex from your palette

const QuestionnairePage = () => {
  const [form, setForm] = useState({
    eventDate: "",
    eventLocation: "",
    occasion: "",
    guests: "",
    dietary: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      none: false,
      other: "",
    },
    cuisine: "",
    flavours: "",
    courses: {
      appetizer: 0,
      main: 0,
      dessert: 0,
      horsDevours: 0,
    },
    serviceStyle: "",
    budget: "",
    notes: "",
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleNestedCheckbox = (section, key) => (e) => {
    setForm({
      ...form,
      [section]: { ...form[section], [key]: e.target.checked },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with API call / e-mail / firestore etc.
    console.table(form);
    alert("Thank you – your preferences have been sent! ✨");
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: "2xl" }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 700, color: accent, textAlign: "center" }}
        >
          Dinner Party Questionnaire
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mb: 4, textAlign: "center", maxWidth: "70ch", mx: "auto" }}
        >
          Give us a taste of your vision – we’ll craft an unforgettable
          evening around it.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={4} direction="column">
            {/* Name and Number */}
            <Grid item xs={12}>
              <Grid container spacing={2} direction="row">
                <Grid item xs={6}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.875rem" }}
                  >
                    Name
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    minRows={1}
                    placeholder="e.g. John Doe"
                    value={form.name}
                    onChange={handleChange("name")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.875rem" }}
                  >
                    Number
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    minRows={1}
                    type="tel"
                    placeholder="e.g. (123) 456-7890"
                    value={form.number}
                    onChange={handleChange("number")}
                  />
                </Grid>
              </Grid>
            </Grid>
            {/* Event date & time */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.875rem" }}
              >
                Event date & time
              </Typography>
              <TextField
                fullWidth
                required
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
                value={form.eventDate}
                onChange={handleChange("eventDate")}
              />
            </Grid>

            {/* Where's the Event? */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.875rem" }}
              >
                Where's the Event?
              </Typography>
              <TextField
                fullWidth
                multiline
                minRows={1}
                placeholder="Home, Venue, etc. (Please provide Address)"
                value={form.cuisine}
                onChange={handleChange("cuisine")}
              />
            </Grid>

            {/* What's the occasion */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.875rem" }}
              >
                What's the Occasion?
              </Typography>
              <TextField
                fullWidth
                multiline
                minRows={1}
                placeholder="e.g. Birthday, Anniversary, Party"
                value={form.cuisine}
                onChange={handleChange("cuisine")}
              />
            </Grid>

            {/* Expected guest count */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.875rem" }}
              >
                Expected guest count
              </Typography>
              <TextField
                fullWidth
                required
                type="number"
                inputProps={{ min: 1 }}
                value={form.guests}
                onChange={handleChange("guests")}
              />
            </Grid>

            {/* Favorite cuisines or themes */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.875rem" }}
              >
                Favorite cuisines or themes
              </Typography>
              <TextField
                fullWidth
                multiline
                minRows={1}
                placeholder="e.g. Coastal Italian, Tex-Mex tapas, Sushi omakase…"
                value={form.cuisine}
                onChange={handleChange("cuisine")}
              />
            </Grid>

            {/* Flavours you love (or dislike) */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.875rem" }}
              >
                Flavours you love (or dislike)
              </Typography>
              <TextField
                fullWidth
                multiline
                minRows={1}
                placeholder="Bright citrus, earthy truffle, no cilantro…"
                value={form.flavours}
                onChange={handleChange("flavours")}
              />
            </Grid>

            {/* Desired courses */}
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: "0.875rem",
                    color: accent,
                  }}
                >
                  Desired courses
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    mt: 1,
                    gap: 6,
                    justifyContent: "center",
                  }}
                >
                  {[
                    ["horsDevours", "Hors d'oeuvres"],
                    ["appetizer", "Appetizer"],
                    ["main", "Main"],
                    ["dessert", "Dessert"],
                  ].map(([key, label]) => (
                    <FormControlLabel
                      key={key}
                      label={label}
                      labelPlacement="end"
                      sx={{ flex: "0 0 auto", mx: 0 }}
                      control={
                        <Select
                          value={form.courses[key]}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              courses: {
                                ...form.courses,
                                [key]: e.target.value,
                              },
                            })
                          }
                          sx={{
                            width: 50,
                            height: 40,
                            color: accent,
                            "& .MuiSelect-select": {
                              padding: "10px 24px 8px 8px",
                              fontSize: "0.875rem",
                            },
                            "& .MuiSvgIcon-root": {
                              fontSize: "1rem",
                            },
                            mr: 1,
                          }}
                        >
                          {[0, 1, 2].map((num) => (
                            <MenuItem
                              key={num}
                              value={num}
                              sx={{ fontSize: "0.875rem" }}
                            >
                              {num}
                            </MenuItem>
                          ))}
                        </Select>
                      }
                    />
                  ))}
                </Box>
              </FormControl>
            </Grid>

            {/* Dietary preferences */}
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: "0.875rem",
                    color: accent,
                  }}
                >
                  Dietary preferences / restrictions
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
                  {[
                    ["vegetarian", "Vegetarian"],
                    ["vegan", "Vegan"],
                    ["glutenFree", "Gluten-free"],
                    ["dairyFree", "Dairy-free"],
                    ["none", "No restrictions"],
                  ].map(([key, label]) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <Checkbox
                          checked={form.dietary[key]}
                          onChange={handleNestedCheckbox("dietary", key)}
                          sx={{
                            color: accent,
                            "&.Mui-checked": { color: accent },
                          }}
                        />
                      }
                      label={label}
                    />
                  ))}
                </Box>
                <TextField
                  fullWidth
                  multiline
                  minRows={1}
                  placeholder="Other – please specify"
                  variant="standard"
                  value={form.dietary.other}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      dietary: { ...form.dietary, other: e.target.value },
                    })
                  }
                  sx={{ mt: 2 }}
                />
              </FormControl>
            </Grid>

            {/* Service style */}
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: "0.875rem",
                    color: accent,
                  }}
                >
                  Service style
                </Typography>
                <RadioGroup
                  value={form.serviceStyle}
                  onChange={handleChange("serviceStyle")}
                >
                  {["Plated", "Family-style", "Buffet"].map((label) => (
                    <FormControlLabel
                      key={label}
                      value={label}
                      control={
                        <Radio
                          sx={{ color: accent, "&.Mui-checked": { color: accent } }}
                        />
                      }
                      label={label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Budget */}
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: "0.875rem",
                    color: accent,
                  }}
                >
                  Per-guest budget (USD)
                </Typography>
                <RadioGroup
                  value={form.budget}
                  onChange={handleChange("budget")}
                >
                  {["Standard: $50 - $100", "Gourmet: $100 - $175", "Chef's Table: $175 - $225"].map((label) => (
                    <FormControlLabel
                      key={label}
                      value={label}
                      control={
                        <Radio
                          sx={{ color: accent, "&.Mui-checked": { color: accent } }}
                        />
                      }
                      label={label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Notes */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.875rem" }}
              >
                Anything else we should know?
              </Typography>
              <TextField
                fullWidth
                multiline
                minRows={3}
                placeholder="Surprise guest allergies, a favourite childhood dessert, live jazz saxophonist…"
                value={form.notes}
                onChange={handleChange("notes")}
              />
            </Grid>

            {/* Submit */}
            <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: accent,
                  "&:hover": { backgroundColor: "#641202" },
                  borderRadius: "9999px",
                  px: 6,
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default QuestionnairePage;