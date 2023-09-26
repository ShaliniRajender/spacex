
import { gql } from '@apollo/client';
const listship = gql`query Ships {
    ships {
      id
      model
      name
      type
      status
      image
      roles
      url
      home_port
      year_built
    }
  }
`;
const listdragon = gql`query Dragons {
    dragons {
      name
      description
      first_flight
      diameter {
        feet
        meters
      }
      launch_payload_mass {
        lb
        kg
      }
    }
  }
`;
export { listship, listdragon }