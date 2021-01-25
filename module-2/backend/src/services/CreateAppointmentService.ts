import AppointmentsRepository from '../repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';

interface Request {
    provider: string;
    date: Date;
}

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor (appointmentsRepository: AppointmentsRepository){
        this.appointmentsRepository = appointmentsRepository;
    }
    public execute({provider, date}: Request){

        const appointmentDate = startOfHour(date);

        const findAppointmentInSameHour = this.appointmentsRepository.findByDate(
            appointmentDate,
        );

        if (findAppointmentInSameHour) {
            throw Error('This appointment is already booked!')
        }

        const appointment = this.appointmentsRepository.create({
            provider,
            date: appointmentDate,
        });

        return appointment;
    }
}

export default CreateAppointmentService;
