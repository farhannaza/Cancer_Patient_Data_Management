import { create } from 'ipfs-http-client';

const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

async function uploadFile(file) {
    try {
      const added = await ipfs.add(file);
      console.log('File uploaded to IPFS:', added.path);
      return added.path; // This is the IPFS hash
    } catch (error) {
      console.error('Error uploading file to IPFS:', error);
    }
  }
  async function fetchFile(ipfsHash) {
    try {
      const file = await ipfs.cat(ipfsHash);
      console.log('File retrieved from IPFS:', file);
      return file;
    } catch (error) {
      console.error('Error retrieving file from IPFS:', error);
    }
  }
  
  
  

export default ipfs;

