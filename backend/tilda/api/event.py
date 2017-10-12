import os
import re
from flask_restplus import abort
from resources import ProtectedResource
from .namespaces import ns_events
from .fields.event import fields, get_fields
from ..models.event import Event


parser = ns_events.parser()
parser.add_argument('title', type=str, required=True, location='json')
parser.add_argument('markdown', type=str, required=True, location='json')


@ns_events.route('', endpoint='events')
class EventListAPI(ProtectedResource):
    @ns_events.marshal_with(get_fields)
    def get(self):
        """List events"""
        events = [event for event in Event.select()]
        return events

    @ns_events.marshal_with(get_fields)
    @ns_events.doc(body=fields)
    def post(self):
        """ Create new event """
        args = parser.parse_args()
        title = args.get('title')
        markdown = args.get('markdown')
        print(title, markdown)
        event = Event(title=title, markdown=markdown)
        event.save()
        return event


@ns_events.route('/<id>', endpoint='event')
@ns_events.response(404, 'Event not found')
class EventAPI(ProtectedResource):
    @ns_events.marshal_with(get_fields)
    def get(self, id):
        try:
            event = Event.get(id=id)
        except Event.DoesNotExist:
            abort(404, 'Event not found')
        return event
