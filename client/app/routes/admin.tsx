import { OrganizationProfile } from '@clerk/remix'

export default function OrganizationProfilePage() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        //   height: '100vh',
        }}
      >
        <OrganizationProfile />
      </div>
    );
  }
  