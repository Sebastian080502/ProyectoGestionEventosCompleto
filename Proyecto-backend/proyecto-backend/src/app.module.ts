import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { SpeakerModule } from './speaker/speaker.module';
import { ConferenceModule } from './conference/conference.module';
import { RegistrationModule } from './registration/registration.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { LocationModule } from './location/location.module';
import { FeedbackModule } from './feedback/feedback.module';


@Module({
  imports: [UserModule, EventModule, SpeakerModule, ConferenceModule, RegistrationModule, SponsorModule, LocationModule, FeedbackModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
