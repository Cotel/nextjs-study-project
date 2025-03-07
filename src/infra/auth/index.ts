import { UserPassword } from '@core/users/entities/UserPassword'
import NextAuth from 'next-auth'
import { repositories } from '../di/repositories'
import { services } from '../di/services'
import { AuthJsService } from './AuthJsService'
import { DomainAdapter } from './DomainAdapter'
import { authConfig } from './config'

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)
