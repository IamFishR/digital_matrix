
const colors = [
  { color: '#EC4E20' },
  { color: '#1B2C40' },
  { color: '#ECB0E1' },
  { color: '#DBFF76' },
  { color: '#58355E' },
  { color: '#EC0B43' },
  { color: '#1A659E' },
  { color: '#FFFAFA' },
  { color: '#E27396' },
];

const iconColors = [
  { color: '#EC4E20' },
  { color: '#1B2C40' },
  { color: '#ECB0E1' },
  { color: '#DBFF76' },
  { color: '#58355E' },
  { color: '#EC0B43' },
  { color: '#1A659E' },
  { color: '#FFFAFA' },
  { color: '#E27396' },
]

const myView = (props) => {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            Digital Matrix Settings
          </Text>
        }
      >
        <TextInput
          label="Enter your name"
          settingsKey="name"
          placeholder="Your name"
          maxLength={2}
          title="Name"
        />
      </Section>
      <Section
        title={
          <Text align="left">
            Date Color
          </Text>
        }
      >
        <ColorSelect
          settingsKey="color"
          colors={colors}
        />
      </Section>
      <Section
        title={
          <Text align="left">
            Icons Color
          </Text>
        }
      >
        {/* color picker */}
        <ColorSelect
          settingsKey="iconsColor"
          colors={iconColors}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(myView);
