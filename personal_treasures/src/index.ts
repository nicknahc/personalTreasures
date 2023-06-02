import { Amplify, Auth } from 'aws-amplify'
import awsExports from './aws-exports'
Amplify.configure(awsExports)
Auth.configure(awsExports);