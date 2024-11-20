import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  await prisma.member.deleteMany()
  await prisma.invite.deleteMany()
  await prisma.project.deleteMany()
  await prisma.organization.deleteMany()
  await prisma.user.deleteMany()

  const passwordHash = await hash('123456', 1)

  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@example.com',
      avatarUrl: 'https://github.com/GabrielCenteioFreitas.png',
      passwordHash,
    },
  })
  const user2 = await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatarUrl: faker.image.avatarGitHub(),
      passwordHash,
    },
  })
  const user3 = await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatarUrl: faker.image.avatarGitHub(),
      passwordHash,
    },
  })

  await prisma.organization.create({
    data: {
      name: 'Example Inc (Admin)',
      domain: 'example.com',
      slug: 'example-admin',
      avatarUrl: faker.image.avatarGitHub(),
      shouldAttachUsersByDomain: true,
      ownerId: user1.id,
      projects: {
        createMany: {
          data: [
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([user1.id, user2.id]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([user1.id, user2.id]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([user1.id, user2.id]),
            },
          ],
        },
      },
      members: {
        createMany: {
          data: [
            {
              userId: user1.id,
              role: 'ADMIN',
            },
            {
              userId: user2.id,
              role: 'MEMBER',
            },
            {
              userId: user3.id,
              role: 'BILLING',
            },
          ],
        },
      },
    },
  })

  await prisma.organization.create({
    data: {
      name: 'Example Inc (Member)',
      slug: 'example-member',
      avatarUrl: faker.image.avatarGitHub(),
      ownerId: user1.id,
      projects: {
        createMany: {
          data: [
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([user1.id, user2.id]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([user1.id, user2.id]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([user1.id, user2.id]),
            },
          ],
        },
      },
      members: {
        createMany: {
          data: [
            {
              userId: user1.id,
              role: 'MEMBER',
            },
            {
              userId: user2.id,
              role: 'ADMIN',
            },
            {
              userId: user3.id,
              role: 'BILLING',
            },
          ],
        },
      },
    },
  })

  await prisma.organization.create({
    data: {
      name: 'Example Inc (Billing)',
      slug: 'example-billing',
      avatarUrl: faker.image.avatarGitHub(),
      ownerId: user1.id,
      projects: {
        createMany: {
          data: [
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([user3.id, user2.id]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([user3.id, user2.id]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(5),
              description: faker.lorem.paragraph(),
              avatarUrl: faker.image.avatarGitHub(),
              ownerId: faker.helpers.arrayElement([user3.id, user2.id]),
            },
          ],
        },
      },
      members: {
        createMany: {
          data: [
            {
              userId: user1.id,
              role: 'BILLING',
            },
            {
              userId: user2.id,
              role: 'ADMIN',
            },
            {
              userId: user3.id,
              role: 'MEMBER',
            },
          ],
        },
      },
    },
  })
}

seed().then(() => {
  console.log('🌱 Database seeded!')
})
