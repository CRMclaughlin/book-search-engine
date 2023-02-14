const { GraphQLError } = require('graphql')
const { User } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
     me: async (parent, args, context, info) => {
        if (context.user) {
            const userProile = await User.findOne({ _id: context.user._id }).select('-__v -password')

            return userProile
        }
        
        throw new GraphQLError('You are not logged in, please try again!', {
            extensions: {
                code: 'UNAUTHENTICATED',
                http: { status: 401 }

            }
        }) 

        
     }
    },

    Mutation: {
        login: async (parent, { email, password }, context, info) => {
            const user = await User.findOne({ email })
            const correctPw = user.isCorrectPassword(password)
            
            if (!correctPw) {
                throw new GraphQLError('Password Incorrect, please try again!', {
                    extensions: {
                        code: 'UNAUTHENTICATED',
                        http: { status: 400 }
        
                    }
                }) 
            }

            const token = signToken(user)

            return { token, user }
        },

        addUser: async (parent, args, context, info) => {
            const user = await User.create(args)
            const token = signToken(user)

            return { token, user }
        },
        saveBook: async (parent, { bookData }, context, info) => {
            console.log(context.user)
            if (context.user) {
                const savedBook = await User.findByIdAndUpdate(
                    { _id: context.user._id},
                    { $push: { savedBooks: bookData } },
                    { new: true }
                    )
                return savedBook
            }
        },
        removeBook: async (parent, { bookId }, context, info) => {
            if (context.user) {
                const removeBook = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId }}},
                    { new: true }
                )
                return removeBook
            }
        }


    }
   
    
}

module.exports = resolvers